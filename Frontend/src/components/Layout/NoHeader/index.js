

function NoHeader({ children }) {
    return (
        <div>
            <div className="container">
                <div className="content">
                    {/* Content sẽ là động -> truyền từ ngoài vào -> nhận vào children props */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default NoHeader;
