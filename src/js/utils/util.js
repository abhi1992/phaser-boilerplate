
export default class Util {

	static getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    static getRandomColor() {
        // let c = Math.random()*12;
        let c = this.getRandomInt(0, 13);
        let color = "";
        switch(c) {
            case 0:
            color = "#c62828";
            break;

            case 1:
            color = "#6A1B9A";
            break;

            case 2:
            color = "#4527A0";
            break;

            case 3:
            color = "#283593";
            break;

            case 4:
            color = "#0277BD";
            break;

            case 5:
            color = "#c62828";
            break;

            case 6:
            color = "#00695C";
            break;

            case 7:
            color = "#c62828";
            break;

            case 8:
            color = "#2E7D32";
            break;

            case 9:
            color = "#EF6C00";
            break;

            case 10:
            color = "#c62828";
            break;

            case 11:
            color = "#4E342E";
            break;

            default:
            color = "#37474F";
            break;
        }

        return color;
    }
}