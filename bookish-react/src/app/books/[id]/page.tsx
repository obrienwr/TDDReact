import BookDetailContainer from "@/app/ui/components/BookDetail/BookDetailContainer";

export default function Page({params}: { params: { id: string } }) {
  const id = params.id;

  return (
    <main>
      <BookDetailContainer bookId={id} />
    </main>
  )
}
