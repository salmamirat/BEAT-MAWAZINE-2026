import data from "../data/dataArtist.ts"
import { Link } from 'react-router-dom'

function Artist() {
    return (
        <div className='bg-[#0c083d] pt-15 pb-10 flex justify-evenly rounded-3xl p-6'>
            {data.map((artist) => (
                <div key={artist.id} className='bg-[#ecedf0] rounded-4xl'>
                    <img
                        className='w-3xs h-60 p-3 rounded-4xl'
                        src={artist.img}
                        alt={artist.name}
                    />

                    <div className='text-[#2b2a2a] font-bold font-serif p-7'>
                        <h2>{artist.name}</h2>
                        <h2>{artist.date}</h2>


                        <button className='cursor-pointer'>
                            save to passport
                        </button>

                        <div className='bg-amber-50 w-fit rounded-3xl border border-black'>
                            <Link
                                to={`/artist/${artist.id}`}
                                className='text-[#adeb1c] hover:text-amber-700'
                            >
                                view details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Artist
