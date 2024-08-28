import Header from "../components/templates/Header";

function Page() {
    return (
        <>
            <Header
                lista={[
                    { url: "./Page.jsx", text: "Inicio" },
                    { url: "./Tienda.jsx", text: "Tienda" },
                ]}
            />

            <Header
                lista={[
                    { url: "./Page.jsx", text: "Inicio" },
                    { url: "./Tienda.jsx", text: "Tienda" },
                ]}
            />

            <Header
                lista={[
                    { url: "./Page.jsx", text: "Inicio" },
                    { url: "./Tienda.jsx", text: "Tienda" },
                ]}
            />
        </>
    );
}

export default Page;
