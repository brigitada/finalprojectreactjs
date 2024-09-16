export default function Component({ el }) {
  return (
    <div className="card w-25 m-4 d-flex flex-col gap-2" >
      <img src={el.Poster} className="card-img-top" alt={el.Title} />
      <h5  className="px-3 card-title">{el.Title}</h5>
      <div className='px-3 d-flex align-items-center gap-2'>
        <p  className='m-0'>Release: {el.Year}</p>
      </div>
      
      
    </div>
  )
}