import {Movie} from "../model/Movie";
import React, {ChangeEvent, FormEvent} from "react";



type CreateMovieProps = {

    addMovie: (newMovie: Movie) => void
}

export default function CreateMovie (props: CreateMovieProps) {


    const [newMovie, setMovie] = React.useState({
        id: 0,
        title: "",
        image: "",
        author: "",
        comment: "",
        datenDurchgeprüft: false,
    })



    function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        setMovie (prevMovie => ({
            ...prevMovie,
            [changeEvent.target.name]:
                changeEvent.target.type === "checkbox" ? changeEvent.target.checked
                    : changeEvent.target.value
        }))
    }


    function handleSubmit(event: FormEvent<HTMLFormElement>) {

        if (!newMovie) {
            alert(`Please fill book id, title, image, author and comment `)
            return
        }

        event.preventDefault()
         props.addMovie (newMovie)
    }





    return (
            <div className={" "}>
                <form onSubmit={handleSubmit}>
                    <h2>Add new Movie</h2>
                        <label>
                            <p>New Id:</p>
                            <input type="number"
                                   name="id"
                                   value={newMovie.id}
                                   className={""}
                                   onChange={handleChange}
                            />
                        </label>

                        <label>
                            <p>New Title:</p>
                            <input type="text"
                                   className={" "}
                                   name="title"
                                   value={newMovie.title}
                                   onChange={handleChange}
                            />
                        </label>

                        <label>
                            <p>New Image:</p>
                            <input type="text"
                                   className={" "}
                                   name="image"
                                   value={newMovie.image}
                                   onChange={handleChange}
                            />
                        </label>

                        <label>
                            <p>New Author:</p>
                            <input type="text"
                                   className={" "}
                                   name="author"
                                   value={newMovie.author}
                                   onChange={handleChange}
                            />
                        </label>

                        <label>
                            <p>New Comment:</p>
                            <input type="text"
                                   className={" "}
                                   name="comment"
                                   value={newMovie.comment}
                                    onChange={handleChange}
                            />
                        </label>

                        <label>
                            <h3>Hast du alle Daten nochmals durchgeprüft?
                            <input
                                name="datenDurchgeprüft"
                                className={" "}
                                type="checkbox"
                                checked={newMovie.datenDurchgeprüft}
                                onChange={handleChange}
                            /></h3>
                        </label>

                        <div>
                            <button > Create new Movie </button>
                        </div>
                </form>
            </div>);


}
