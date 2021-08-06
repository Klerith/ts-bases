(()=> {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñar activada!';
    }
    
    console.log(typeof activateBatisignal);

    const heroName = returnName();


})()