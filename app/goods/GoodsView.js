export class GoodsView{
    constructor(searchFunc){
       this.goodsConteiner = document.querySelector('.main-side');
       this.inputSearch = document.querySelector('.inp-search');
       this.btnSearch = document.querySelector('.btn-search');
       this.btnSearch.addEventListener('click', searchFunc);
    }

    renderGoods(data){
        
        this.goodsConteiner.innerHTML = data.map(goods => this.getGoods(goods)).join(' ');
    }

    getGoods(goods){     
      
      return ` <div class="card">
                 <img src="${goods.img}" class="card_img" alt="...">
                 <div class="card_price">${goods.prise}</div>
                 <div class="card_button">
                  <input type="checkbox">Bay</input><button>Full discribe</button>
                 </div> 
              </div> `;
    }
    
    get searchValue(){
      return this.inputSearch.value;
    }
  }
  
  
       
  // return  `<div class="card" style="width: 15rem;">
  // <img src="${goods.img}" class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">${goods.brend}</h5>
  //     <p class="card-text">${goods.price}</p>          
  //   </div>
  // </div>`;