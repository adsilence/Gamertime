export function Page({
  title = "Gamertime",
  children,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/public/reset.css"></link>
        <link rel="stylesheet" href="/public/styles.css"></link>
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
