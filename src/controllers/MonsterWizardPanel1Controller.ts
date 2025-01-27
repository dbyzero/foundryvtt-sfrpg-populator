import { MonsterCreation } from "../data/MonsterCreation.js"
import { Grafts } from "../data/Grafts.js"
import NPCCreationContext from "../models/NPCCreationContext.js"
import MonsterWizardPanel2Controller from "./MonsterWizardPanel2Controller.js"
import { CR } from "../data/CRs.js"

export default class MonsterWizardPanel1Controller extends FormApplication {
    private context: NPCCreationContext

    constructor(context: NPCCreationContext) {
        super()
        this.context = context
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "populator-panel",
            classes: ["sfrpg"],
            template:
                "modules/sfrpg-populator/templates/MonsterWizardPanel_1.html",
            width: 300,
            height: 300,
            minimizable: true,
            resizable: true,
            title: "Create Monster (1/2)"
        })
    }

    /**
     * Adds any event listeners to the application DOM
     * @param {JQuery<HTMLElement>} html The root HTML of the application window
     * @protected
     */
    public activateListeners(html: JQuery<HTMLElement>) {
        // Listener for when a day is clicked
        ;(<JQuery>html)
            .find(".nextButton")
            .on("click", this.onNextButtonClicked.bind(this))
        //html.find('select[name="selectedArray"]').change(this.onSelectedArrayChanged.bind(this));
    }

    /**
     * Retrieves Data to be used in rendering template.
     *
     * @param options
     * @returns {Promise<Object>}
     */
    getData(options = {}) {
        return mergeObject(super.getData(), {
            options: options,
            isGM: game.user.isGM,
            arrays: MonsterCreation.arrays,
            CRs: CR,
            creatureTypes: Grafts.creatureType
        })
    }

    onNextButtonClicked(e: Event) {
        let monsterWizardPanelController = new MonsterWizardPanel2Controller(
            this.context
        )
        monsterWizardPanelController.render(true)
    }
    async onSelectedArrayChanged(e: Event) {
        //e.target.value
        //this.selectedArray = ((HTMLSelectElement) e.target).val;
        //this.render(true);
        //
    }
}
