import React from 'react';

export default function CartItem({item,value}){
    const{id,title,img,price,total,count} = item;
    const {increment, decrement, removeItem} = value;
    var myPrice = price;
      var myTotal = total;
      var reverse2 = myPrice
          .toString()
          .split("")
          .reverse()
          .join(""),
        thousands = reverse2.match(/\d{1,3}/g);
      var reverse = myTotal
          .toString()
          .split("")
          .reverse()
          .join(""),
        totalThousands = reverse.match(/\d{1,3}/g);
      thousands = thousands
        .join(".")
        .split("")
        .reverse()
        .join("");
      totalThousands = totalThousands
        .join(".")
        .split("")
        .reverse()
        .join("");
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price :</span>
                {thousands}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" 
                        onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" 
                        onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
           {/* */}
           <div className="col-10 mx-auto col-lg-2">
               <div className="cart-icon" onClick={()=>removeItem(id)}>
               <i className="fa fa-trash"></i>
               </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : IDR {totalThousands}</strong>
            </div>
        </div>
    )
}
