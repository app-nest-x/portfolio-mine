import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Creative Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-primary">
        {children}
      </body>
    </html>
  );
}
