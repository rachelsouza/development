# development
The src code folder for this assignment can be viewed at the website link: https://github.com/rachelsouza/development .
You can also view the code at https://drive.google.com/drive/folders/1E8vQsi0LqkdYPclIwy7S4wguSEgyrKYL?usp=sharing .

The site can be run by downloading the entire folder from the google drive, navigating to it in terminal,
and then running "npm start", which will navigate to the site http://localhost:3000 in your browser, 
where you can see the site live!

The user can use the various drop down menus in order to customize their adoption experience. 
The site takes into account how users may want to see an image of the cat first, and then the 
following information about the cat. The drop down menus at the top make it very easy to know 
what your different options for filtering and sorting are. Additionally, the large text at the top 
followed by the slightly smaller text makes sure the user knows the purpose of the site, as well as 
more detailed text below ("Filter by age, hair type,or search for your breed!") for those who still 
want to stay on the site.

Finally, the different components work together in order to delegate certain responsibilities,
per say, in the code.The list component takes responsibility for rendering different aspects
of the cats and is a great structural aspect of the code.The FilteredList component is responsible
for adding sorting and filtering capabilities to the list. The dropdowns + search bar are held in this
component. Additionally, this is where the user can trigger the change of state within the FilteredList 
class, changing things like the "hair" state, the "age" state, and the sorting order state. Finally, the 
header component takes care of displaying the header and instructional text.

The goal of the application is to be able to efficiently find the pet for which you are looking,
narrowing the options down to the different types of cats the user may want based on hair,
age, or breed. The user can go back to the original state of the site by Un-filtering to "All"
in age and hair, as well as "unsorting" in terms of age. Overall, this site lets the user customize
their adoption experience/search.


