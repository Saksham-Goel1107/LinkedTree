export const metadata = {
  title: 'LinkedTree',
  description: 'A beautiful way to link your tree with your friends.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
