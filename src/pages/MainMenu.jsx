import Header from "../layouts/Header";
import Highlight from "../components/Highlight";
import Search from "../components/search";
import History from "../components/History";
import NewUpdate from "../components/NewUpdate";
import TopList from "../components/TopList";
import Navbar from "../layouts/Navbar";
import Completed from "../components/Completed";

export default function MainMenu() {
    return(
        <div className='flex flex-col gap-4 pb-24 px-1 py-5'>
            <Header />
            <Highlight />
            <Search />
            <History />
            <NewUpdate/>
            <TopList />
            <Completed />
            <Navbar />
        </div>
    );
}