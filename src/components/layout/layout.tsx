import Footer from "./footer";
import Header from "./header";

function Layout(props : any) {
    return (
        <div className="h-full">
            <Header />

            {props.children}

            <Footer />
        </div>
    )
}

export default Layout;