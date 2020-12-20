import BookRow from "./BookRow";

export default function Bookshelf() {
  return (
    <div className="pb-8">
      This is a running list of books that I've read since the inception of this
      website. Titles I particularly enjoyed are bolded.
      <div className="pt-2 mt-2">
        <BookRow
          title="Clean Code: A Handbook of Agile Software Craftsmanship"
          date="12/20/20"
          url="https://www.goodreads.com/book/show/3735293-clean-code"
        />
        <BookRow
          favorite
          title="Zero to One: Notes on Startups, or How to Build the Future"
          date="11/30/20"
          url="https://www.goodreads.com/book/show/37653154-zero-to-one"
        />
      </div>
    </div>
  );
}
