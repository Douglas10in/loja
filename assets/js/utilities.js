function createElement(tag,attrs={},...childrens) {
    const element=document.createElement(tag);

    for(let attr in attrs) {
        if(/^on([A-Z]{1}).*/.test(attr)) {
            element.addEventListener(attr.substring(2).toLowerCase(),attrs[attr]);
         } else {
                element[attr]= attrs[attr] ;
            }
        }
        
    
    element.append(...childrens)

    return element
}