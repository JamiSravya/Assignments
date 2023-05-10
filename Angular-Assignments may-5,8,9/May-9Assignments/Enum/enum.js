var All_Animals;
(function (All_Animals) {
    All_Animals[All_Animals["tiger"] = 0] = "tiger";
    All_Animals[All_Animals["dog"] = 1] = "dog";
    All_Animals[All_Animals["fox"] = 2] = "fox";
    All_Animals[All_Animals["pig"] = 3] = "pig";
})(All_Animals || (All_Animals = {}));
;
var animal = All_Animals.pig;
console.log(All_Animals);
console.log(animal);
console.log(All_Animals[2]);
