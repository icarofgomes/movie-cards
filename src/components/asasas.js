<div
className="p-4 gap-5 space-y-4 md:p-2"
data-testid="movie-card"
>
<div className="max-w-xs bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform
  hover:scale-105 transition duration-500">
  <h3 className="mb-3 text-xl font-bold text-green-600">{ title }</h3>
  <div className="relative">
    <img className="w-full rounded-xl" src={ imagePath } alt={ title } />
  </div>
  <p className="text-black">{ storyline }</p>
  <div className="my-4">
    <div className="mt-4 text-xl w-full text-white bg-green-600 py-1.5
      rounded-xl shadow-lg text-center font-bold">
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
    </div>
  </div>
  </div>
</div>