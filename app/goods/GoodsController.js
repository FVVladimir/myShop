import { GoodsView } from "./GoodsView.js";
import { GoodsModel } from "./GoodsModel.js";




export class GoodsController{
    constructor(){
        
         this.view = new GoodsView(this.handleClickSearch.bind(this));
         this.model = new GoodsModel();

         this.init();
            
    }

        init(){

        this.model.loadData().then(d=> this.view.renderGoods(d));
    }

    handleClickSearch(){
        //Выкачать введенный текст в поиске
        const searchStr = this.view.searchValue;

        //Передать текст Model
        //ПОлучить из модели новые данные для рендера
        const searchedData = this.model.getSearchedData(searchStr);

        //Эти данные передать view для рендера новых карточек
        this.view.renderGoods(searchedData);
    }
}