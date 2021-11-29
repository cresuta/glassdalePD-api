import { useChores,getChores } from "./ChoreProvider.js";
import { useFamily,getFamily } from "./FamilyProvider.js";
import { useFamilyChores,getFamilyChores } from "./FamilyChoreProvider.js";
import { FamilyMember } from "./FamilyMember.js";

const familyChoresNavLink = document.querySelector("#familychores-nav-link");
const contentTarget = document.querySelector('.family');

export const FamilyList = () => {
    getChores()
    .then(getFamily)
    .then(getFamilyChores)
    .then(() => {

    const chores = useChores();
    const family = useFamily();
    const familyChores = useFamilyChores();
    let html = "";
    family.map(person => {
        // Find related chores
        let relatedChores = familyChores.filter(familyChore => familyChore.familyMemberId === person.id);

        // Convert the array from relationship objects to chore objects 
        relatedChores = relatedChores.map(relatedChore => {
            return chores.find(chore => chore.id === relatedChore.choreId)
        })

        // Get HTML representation of product
        html += FamilyMember(person,relatedChores)
        contentTarget.innerHTML = `
            <h2 class="heading">Family Chores</h2>
            ${html}
        `
        })
    })
   

    // const render = () => {
    //     contentTarget.innerHTML = family.map(person => {
    //         // Find related chores
    //         let relatedChores = familyChores.filter(familyChore => familyChore.familyMemberId === person.id);

    //         // Convert the array from relationship objects to chore objects 
    //         relatedChores = relatedChores.map(relatedChore => {
    //             return chores.find(chore => chore.id === relatedChore.choreId)
    //         })

    //         // Get HTML representation of product
    //         const html = FamilyMember(person,relatedChores)
    //         return html;
    //     }).join("")
    // }
    
    // render();

}

familyChoresNavLink.addEventListener("click", function () {
    document.querySelector('.filters-crime').innerHTML = "";
    document.querySelector('.filters-officers').innerHTML = "";
    document.querySelector('.noteFormContainer').innerHTML = "";
    document.querySelector(".current-list").innerHTML = "";
    FamilyList();
})