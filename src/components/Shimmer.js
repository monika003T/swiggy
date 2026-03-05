// const Shimmer=()=>{
//     return <div className="shimmer-container">
//         <div className="shimmer-cards">Card</div>
//         <div className="shimmer-cards">Card</div>
//         <div className="shimmer-cards">Card</div>
//         <div className="shimmer-cards">Card</div>
//         <div className="shimmer-cards">Card</div>
//     </div>
// }
// export default Shimmer;/

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="shimmer-cards"></div>
      ))}
    </div>
  );
};

export default Shimmer;