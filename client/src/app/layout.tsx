import StandardThemeProvider from "../themes/standard-theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
          <StandardThemeProvider>
            {children}
          </StandardThemeProvider>
      </body>
    </html>
  );
}
