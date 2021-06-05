var array1 = [0,0.000909090973437, 0.000907276000362, 0.000905464985408, 0.000903657986782, 0.000901854014955, 0.000900054001249, 0.000898258003872, 0.000896464975085, 0.000894674973097, 0.000440726988018, 0.000439847004600, 0.000438969000243, 0.000438093004050, 0.000437218986917, 0.000215378997382, 0.000214949002839, 0.000214519997826, 0.000214090992813, 0.000213663995964, 0.000128095998662, 0.000127840001369, 0.000127584993606, 0.000127331004478, 0.000127075996716, 0.000084380000771, 0.000084211998910, 0.000084043997049, 0.000083876002464, 0.000083708000602, 0.000053148000006, 0.000050858998293, 0.000048669000535, 0.000046574001317, 0.000044568001613, 0.000030114000765, 0.000029292999898, 0.000028495000151, 0.000027718999263, 0.000026964000426, 0.000020273999326, 0.000019914999939, 0.000019563000023, 0.000019216999135, 0.000018877999537, 0.000015626999812, 0.000015427000108, 0.000015229000383, 0.000015032999727, 0.000014840000404, 0.000012126000001, 0.000011842000276, 0.000011565000023, 0.000011293999705, 0.000011029000234, 0.000009434000276, 0.000009268000213, 0.000009104000128, 0.000008942999557, 0.000008785000318, 0.000008134000382, 0.000008013999832, 0.000007894999726, 0.000007779000043, 0.000007663999895, 0.000006255999779, 0.000006176000170, 0.000006097000096, 0.000006018000022, 0.000005940999927, 0.000005573000180, 0.000005517999853, 0.000005462999979, 0.000005409000096, 0.000005356000202, 0.000004539000201, 0.000004494000223, 0.000004448999789, 0.000004404999800, 0.000004361999800, 0.000004084000011, 0.000004043999979, 0.000004002999958, 0.000003963999916, 0.000003924999874, 0.000003440000000, 0.000003412000069, 0.000003384999900, 0.000003357999958, 0.000003332000006, 0.000003148999895, 0.000003126999900, 0.000003104999905, 0.000003083999900, 0.000003061999905, 0.000002735999942, 0.000002716999916, 0.000002697999889, 0.000002679000090, 0.000002661000053, 0.000002519999953, 0.000002510000058, 0.000002499999937, 0.000002490000043, 0.000002479999921, 0.000002248000101, 0.000002243999916, 0.000002238999969, 0.000002235000011, 0.000002230000064, 0.000002226000106, 0.000002220999932, 0.000002216999974, 0.000002213000016, 0.000002208000069, 0.000002020000011, 0.000002007999910, 0.000001996000037, 0.000001984999926, 0.000001974000043, 0.000001962999931, 0.000001952000048, 0.000001940999937, 0.000001931000043, 0.000001920999921, 0.000001911000027, 0.000001902000008, 0.000001892999990, 0.000001883999971, 0.000001874999953, 0.000001866000048, 0.000001858000019, 0.000001849999990, 0.000001841999961, 0.000001834000045, 0.000001826000016, 0.000001818999976, 0.000001812000050, 0.000001805000011, 0.000001797999971, 0.000001791000045, 0.000001784999995, 0.000001778999945, 0.000001772000019, 0.000001765999968, 0.000001761000021];
var array3 = ['Normal','Painful','Excruciating','Fatal','Infernal','Infernal (PW)', 'Merciless', 'Merciless (PW)', 'Bloodshed', 'Bloodshed (PW)'];
var table = getID('table-result');
var table2 = getID('hint-table');

window.onload = () => {
    createLegend();
    generateResult();
}

window.onchange = () => generateResult();

var mod = 0;

const createLegend = () => {

    for(let i = 0; i < array3.length; i++){
        let row = table2.insertRow();
        let td1 = row.insertCell();
            td1.innerHTML = `n + ${mod}`;
        let td2 = row.insertCell();
            td2.innerHTML = array3[i];
        mod += 5;
    }

}
