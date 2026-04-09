function schedule() {
    return(
        <div className="flex justify-center items-center border-b border-t ">
            <div className="flex flex-col">
                <span>Min</span>
                <span>5</span>
            </div>

            <div className="flex flex-col">
                <span>Sen</span>
                <span>6</span>
            </div>

            <div className="flex flex-col">
                <span>Sel</span>
                <span>7</span>
            </div>

            <div className="flex flex-col">
                <span>Sel</span>
                <span>7</span>
            </div>
        </div>        
    );
}

export default function() {
    return (
        <div>
            <div className="flex w-full justify-center items-center">
                <span className="font-extrabold text-4xl text-white py-2">Jadwal Tayang</span>
            </div>

            <schedule />
        </div>
    );
}