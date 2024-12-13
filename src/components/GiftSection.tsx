import React from 'react';
import { Gallery } from './Gallery';

const GiftSection: React.FC = () => {
    return (
        <div className="flex flex-col space-y-8">

            <section className="flex-1 flex flex-col items-center justify-center p-5 bg-white/60 rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Pemberian Hadiah</h1>
                <p className="text-center mb-6">
                    Pilih cara untuk memberikan hadiah dengan menggunakan rekening kartu
                    atau melalui nomor telepon lainnya seperti GoPay.
                </p>

                <div className="my-10 flex flex-wrap gap-4 justify-center">
                <div className="relative overflow-hidden rounded-lg aspect-square hover:scale-110 transition-transform duration-300"
                    >
                    <div className="border border-gray-300 p-4 rounded-lg text-center bg-white w-60">
                        <div className='my-6'><img src='https://upload.wikimedia.org/wikipedia/en/thumb/2/27/BankNegaraIndonesia46-logo.svg/1280px-BankNegaraIndonesia46-logo.svg.png' /></div>
                        <h2 className="text-lg font-bold">Bank BNI</h2>
                        <p>No. Rekening: 5528910</p>
                    </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg aspect-square hover:scale-110 transition-transform duration-300"
                    >
                        <div className="border border-gray-300 p-4 rounded-lg text-center bg-white w-60">
                            <img src='https://logos-world.net/wp-content/uploads/2023/02/GoPay-Logo-2016.png' />
                            <h2 className="text-lg font-bold">GoPay</h2>
                            <p>Nomor: 0857-3456-7770</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                    Our Teams Gallery 🔥!!
                </h3>
                <Gallery />
            </div>

            <section className="flex-1 flex flex-col items-center justify-center p-5 bg-white/100 rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Terima Kasih</h1>
                <p className="text-center">
                    Terima kasih telah melihat undangan kami. Pastikan kehadiran dan tetap
                    sehat selalu.
                </p>
            </section>
        </div>
    );
};

export default GiftSection;
