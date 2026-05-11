import { useParams, Link } from 'react-router-dom';
import data from '../data/dataArtist.ts';

function ArtistCard() {
  const { id } = useParams();
  const artist = data.find((item) => String(item.id) === id);

  if (!artist) {
    return (
      <div className='p-10 text-[#0B132B]'>
        <h1 className='text-3xl font-bold'>Artist not found</h1>
        <Link to='/artist' className='text-[#F5C542] hover:text-amber-50'>Back to artists</Link>
      </div>
    );
  }

  return (
    <div className='p-10 text-[#0B132B]'>
      <div className='max-w-xl bg-[#F5C542] rounded-3xl p-8'>
        <img src={artist.img} alt={artist.name} className='w-full rounded-3xl mb-6' />
        <h1 className='text-4xl font-bold mb-4'>{artist.name}</h1>
        <p className='text-lg mb-2'>Time: {artist.date}</p>
        <Link to='/artist' className='text-[#0B132B] font-semibold hover:underline'>Back to artists</Link>
      </div>
    </div>
  );
}

export default ArtistCard