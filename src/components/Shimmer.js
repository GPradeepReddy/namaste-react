
const Shimmer = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="shimmer-container">
            {
                arr.map(el => <div key={el} className="shimmer-card"></div>)
            }
        </div>
    )
}

export default Shimmer;