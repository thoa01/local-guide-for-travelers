/* eslint-disable react/no-unescaped-entities */
export default function NotFound() {
  return (
    <div className='grow'>
      <div className='page_not_found__container block min-w-80 px-4 py-10 pb-0 text-center md:m-auto lg:w-full lg:max-w-[1400px] xl:px-[72px]'>
        <img src='/src/assets/not-found.png' alt='Not Found Page' className='object-cover' />
        <h1>Lost your way? Not found</h1>
        <p>It seems the page you're looking for isn't here. The page was not found</p>
      </div>
    </div>
  )
}
