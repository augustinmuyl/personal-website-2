import Background from "../background/background";

export default function HomePage() {
    return (
        <Background>
            <div className="flex justify-center items-center text-center">
                <p className="text-xl">
                    Hello, I am
                    <br />
                    <span className="text-4xl">Augustin Muyl</span>
                    <br />
                    Boston University Student
                </p>
            </div>
        </Background>
    );
}
