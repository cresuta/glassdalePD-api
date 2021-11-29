import { useChores } from "./ChoreProvider.js";
import { useFamily } from "./FamilyProvider.js";
import { useFamilyChores } from "./FamilyChoreProvider.js";
import { FamilyMember } from "./FamilyMember.js";

const familyChoresNavLink = document.querySelector("#familychores-nav-link");
const contentTarget = document.querySelector('.family');

export const FamilyList = () => {
    const chores = useChores();
    const family = useFamily();
    const familyChores = useFamilyChores();

    const render = () => {
        contentTarget.innerHTML = family.map(person => {
            // Find related chores
            let relatedChores = familyChores.filter(familyChore => familyChore.familyMemberId === person.id);

            // Convert the array from relationship objects to chore objects 
            relatedChores = relatedChores.map(relatedChore => {
                return chores.find(chore => chore.id === relatedChore.choreId)
            })

            // Get HTML representation of product
            const html = FamilyMember(person,relatedChores)
            return html;
        }).join("")
    }
    
    render();
}