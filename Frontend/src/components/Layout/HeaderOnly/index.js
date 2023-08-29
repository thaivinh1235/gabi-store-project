import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {/* Content sẽ là động -> truyền từ ngoài vào -> nhận vào children props */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
