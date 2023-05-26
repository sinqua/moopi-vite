import Footer from "./footer";
import Header from "./header";

function Layout(props : any) {
    return (
        <div className="flex flex-col items-center h-auto min-h-full">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;