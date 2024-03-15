'use client'

import CaregiverList from "@/components/care-giver-list";
import Hint from "../components/hint";
import Page from "../components/page";
import SearchBar from "../components/search-bar";
import useCareGivers from "@/hooks/use-care-givers";
import Box from "@mui/material/Box";
import { CareGiver, CareGiverState, CareGiverStateMapping } from "@/types/care-giver";
import useDateGrouper from "@/hooks/use-date-grouper";
import { useEffect, useMemo, useState } from "react";
import { compact } from "lodash";

export default function Home() {
  const { data, update, bulkUpdate } = useCareGivers();
  const { groupCareGivers } = useDateGrouper();
  const [caregiverStateMapping, setCaregiverStateMapping] = useState<CareGiverStateMapping>({});
  const [searchString, setSearchString] = useState<string | undefined>();

  const caregivers: CareGiver[] = useMemo(() => {
    if (!searchString) {
      return data;
    }
    return data.filter(dat => [
      dat.chiName, 
      dat.firstName, 
      dat.lastName,
      `${dat.firstName} ${dat.lastName}`,
      `${dat.lastName} ${dat.firstName}`,
    ].some(name => name.includes(searchString)))
  }, [data, searchString]);

  const hash = (caregiver: CareGiver) => {
    return `${caregiver.userId}+${caregiver.startedAt}+${caregiver.endedAt}`;
  }

  const selectState = (caregiver: CareGiver) => {
    return caregiverStateMapping[hash(caregiver)];
  }

  const setState = (state: CareGiverState) => {
    setCaregiverStateMapping((prev) => ({
      ...prev,
      [hash(state)]: state
    }))
  }

  const confirm = async (caregiver: CareGiverState) => {
    const body = { ...caregiver, status: 'CONFIRMED' };
    const rst = await update(caregiver.userId, body);
    if (!rst) {
      return;
    }
    setState(rst);
  };

  const decline = async (caregiver: CareGiverState) => {
    const body = { ...caregiver, status: 'DECLINED' };
    const rst = await update(caregiver.userId, body);
    if (!rst) {
      return;
    }

    setState(rst);
  }

  const bulkConfirm = async (caregivers: CareGiverState[]) => {
    const body = caregivers.map(caregiver => ({ userId: caregiver.userId, caregiver: { ...caregiver, status: 'CONFIRMED' } }));
    const rst = await bulkUpdate(body);
    if (!rst && !Array.isArray(rst)) {
      return;
    }
    rst.forEach((element: any) => {
      setState({ 
        ...(body.find(bod => bod.userId === element.userId)?.caregiver || {}),
        ...element,
      });
    });
  }

  useEffect(() => {
    const mapping: CareGiverStateMapping = {};
    data.forEach(dat => {
      mapping[hash(dat)] = { ...dat, checked: false };
    })
    setCaregiverStateMapping(mapping);
  }, [data]);

  const sortedCareGivers: { date: Date, caregivers: CareGiver[] }[] = useMemo(() => {
    const rst: { date: Date, caregivers: CareGiver[] }[] = [];
    groupCareGivers(caregivers, 'year').forEach(({ caregivers }) => {
      groupCareGivers(caregivers, 'month').forEach(({ date, caregivers }) => {
        rst.push({ date, caregivers });
      })
    })
    return rst;
  }, [caregivers]);

  return (
    <Page>
      <Box position={'sticky'} top={0} sx={{ backgroundColor: '#fff', zIndex: 1, px: 4, pt: 4, pb: 2 }}>
        <Hint />
        <SearchBar
          value={searchString}
          onChange={setSearchString}
        />
      </Box>
      <Box 
        sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: 4, overflow: 'scroll' }} 
        px={4}
        pb={4}
      >
        {sortedCareGivers.map(({ date, caregivers }) => (
          <CaregiverList 
            date={date} 
            caregivers={compact(caregivers.map(caregiver => selectState(caregiver)))}
            onChange={setState}
            onConfirm={confirm}
            onDecline={decline}
            onBulkConfirm={bulkConfirm}
          />
        ))}
      </Box>
    </Page>
  );
}
