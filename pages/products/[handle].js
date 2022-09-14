const staticProducts = [];

export default function Homepage({}) {
  return (
    <div className="col-span-1 flex justify-center">
      <div className="md:mt-20 mt-5">
        <h3 className="small-text text-sm font-semibold select-none ml-9 md:ml-0">
          SNEAKER COMPANY
        </h3>
        <h1 className="font-bold titles md:text-4xl text-3xl md:w-3/4 ml-9 md:ml-0 mt-5 select-none">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mt-10 md:text-justify w-3/4 nav-btns font-normal ml-9 md:ml-0 select-none">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="mt-7 select-none ml-9 md:ml-0">
          <div className="flex gap-5 items-center justify-between">
            <div className="flex gap-3 items-center">
              <span className="font-bold titles text-3xl">$125.00</span>
              <span className="small-text discount font-bold w-12 text-center rounded-md">
                50%
              </span>
            </div>
            <del className="before-price font-bold md:hidden mr-9">$250.00</del>
          </div>
          <del className="before-price font-bold hidden md:block">$250.00</del>
        </div>
      </div>
    </div>
  );
}
