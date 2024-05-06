//Creating class Movie

class Movie {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;

    if (typeof this.rating === "undefined") {
    this.rating = "PG";
    }
    }
   }

//creating instance of class Movie

   let mov1 = new Movie("Leo", "7 Screen");
   let mov2 = new Movie("Beast", "gold", 5);
   let mov3 = new Movie("Master", "silver", 5);
   let mov4 = new Movie("Gilli", "platinum");

   console.log(mov1.title,mov1.studio,mov1.rating)
   console.log(mov2.title,mov2.studio,mov2.rating)
   console.log(mov3.title,mov3.studio,mov3.rating)
   console.log(mov4.title,mov4.studio,mov4.rating)


//function to get Movie list if rating = PG

   function getPG (mov) {
   let res = []
   for (let i = 0; i < mov.length; i++) {
   if (mov[i].rating == "PG") {
    res.push(mov[i]);
    }
    }
    return res;
   }

   let arr = [mov1, mov2, mov3, mov4]

   console.log(getPG(arr))


//creating instance of class Movie

   let mov5 = new Movie("Casino Royale", "Eon Productions", "PG13");

   console.log(mov5.title,mov5.studio,mov5.rating);