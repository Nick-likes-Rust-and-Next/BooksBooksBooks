import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Autocomplete, TextField } from "@mui/material";

const books = [];

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function AddBook({ open, onClose }) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        Enter a book title:
                        {/* <Autocomplete
                            id="book-search"
                            freeSolo
                            options={books.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField {...params} label="Book Title" />
                            )}
                        /> */}
                        <TextField
                            id="outlined-basic"
                            label="Book Title"
                            variant="outlined"
                        />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default AddBook;