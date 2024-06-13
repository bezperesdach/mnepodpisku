"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.log(error);
  return (
    <html>
      <body>
        <h2>Что-то пошло не так!</h2>
        <button onClick={() => reset()}>Попробовать еще раз</button>
        <a href="/">На главную</a>
      </body>
    </html>
  );
}
