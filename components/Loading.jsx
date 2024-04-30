import Image from "next/image";

function Loading() {
    return (
        <>
            <div class="flex justify-center items-center mt-40">
                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-dark-green"></div>
                <Image src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" width={80} height={80} className="rounded-full h-28 w-28"/>
            </div>

        </>
    )
}

export default Loading;
