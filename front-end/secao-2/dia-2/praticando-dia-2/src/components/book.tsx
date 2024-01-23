type BookProps = {
  book: {
    title: string,
    pages: number,
    isRead: boolean,
    isFavorite: boolean,
  }
}

export default function Book({ book }: BookProps) {
  return (
    <li>
      <span>{book.isRead ? '✅ ' : '⏳ '}</span>
      <span>
        {`${book.title} (${book.pages} páginas)`}
      </span>
      {book.isFavorite && <span> 🤩</span>}
    </li>
  );
}