export class GoodsModel{
     constructor(){

        this.link = 'https://spreadsheets.google.com/feeds/list/1b2ixQn6FD_I_eNCgp4USqGDEh60hd-LKtqJP9Cya85E/od6/public/values?alt=json';

    }    
    
    loadData(){
       return fetch(this.link)
        .then(req => req.json())
         .then(goodsData => this.prepearData(goodsData));         
    }

    prepearData(goodsData){
        const arr = goodsData.feed.entry.map(el=>{
            const obj = {};
              el.content.$t.split(', ').forEach(el => {
                const d = el.split(': ');
                  obj[d[0]] = d[1];
            });
            return obj;   
      });
      this.data = arr;
      return arr;
    }

    getSearchedData(sValue){
        const regS = new RegExp(sValue, 'i');
        return this.data.filter(el => regS.test(el.name));
    }
}
