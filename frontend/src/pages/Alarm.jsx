// import React, { useEffect, useState } from 'react'
// import "./alarm.css"
// import axios from 'axios';
// import { toast } from "react-toastify";


// const Alarm = () => {
//     const [makineler, setMakineler] = useState([]);
//     const [kaliplar, setKaliplar] = useState([]);
//     const [selectedMakine, setSelectedMakine] = useState("placeholder");
//     const [selectedKalip, setSelectedKalip] = useState("placeholder");
//     const [selectedAlarmTipi, setSelectedAlarmTipi] = useState("placeholder");

//     // //Seçilen makine değişirse
//     // useEffect(() => {
//     //     console.log("Seçilen Makine: ", selectedMakine);
//     //     const getKaliplar = async () => {
//     //         const res = await axios.post("http://10.16.199.150:3007/kalipDon", {
//     //             makineNo: selectedMakine,
//     //         });
//     //         setKaliplar(res.data);
//     //         console.log(res.data);
//     //         setSelectedKalip("placeholder");
//     //     };
//     //     getKaliplar();
//     // }, [selectedMakine]);

//     // Seçilen kalıp değişirse
//     useEffect(() => {
//         console.log("Seçilen Kalıp: ", selectedKalip);
//         // setZamanlar(["Günlük", "Haftalık"]);
//     }, [selectedKalip]);

//     // Makine Seçimi
//     const handleSelectedMakine = (e) => {
//         console.log("Seçilen Makine: ", e.target.value);
//         setSelectedMakine(e.target.value);
//     };

//     // Kalıp Seçimi
//     const handleSelectedKalip = (e) => {
//         console.log("Seçilen Kalıp: ", e.target.value);
//         setSelectedKalip(e.target.value);
//     };

//     // useEffect(() => {
//     //     const getMakineler = async () => {
//     //         try {
//     //             const res = await axios.get("http://10.16.199.150:3007/makineDon");
//     //             console.log(res);
//     //             setMakineler(res.data);
//     //         } catch (err) {
//     //             console.log(err);
//     //         }
//     //     };
//     //     getMakineler();
//     // }, []);
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         toast.success("Kayıt başarıyla yapıldı!");
//     }

//     return (
//         <div className='alarm-page d-flex align-items-center justify-content-center'>
//             <form onSubmit={handleSubmit} className='alarm-form shadow p-3 bg-body rounded'>
//                 <div className='alarm-container'>
//                     <div className='mb-4'>
//                         <h6>Alarm Tipi</h6>
//                         {/* <input type="text" /> */}
//                         <select onChange={(e) => setSelectedAlarmTipi(e.target.value)}>
//                             <option value="placeholder" disabled>
//                                 Alarm Tipini Seçiniz
//                             </option>
//                             <option value="Hepsi">Hepsi</option>
//                             <option value="iskartaBilememe">Üst Üste Iskarta Bilememe</option>
//                             <option value="okNokDengesizligi">OK-NOK Dengesizliği Yüzdesi</option>
//                             <option value="f1Skoru">F1 Skoru</option>
//                             <option value="iskartaBilme">Iskarta Bilme Yüzdesi</option>
//                         </select>
//                     </div>
//                     <div className='mb-4'>
//                         {selectedAlarmTipi == "iskartaBilememe" &&
//                             <div>
//                                 <h6>Üst Üste Iskarta Bilememe Sayısı</h6>
//                                 <input type="number" min="0" />
//                             </div>
//                         }
//                         {selectedAlarmTipi == "okNokDengesizligi" &&
//                             <div>
//                                 <h6>OK-NOK Dengesizliği Yüzdesi</h6>
//                                 <input type="number" min="0" max="100" step="1" />
//                             </div>
//                         }
//                         {selectedAlarmTipi == "f1Skoru" &&
//                             <div>
//                                 <h6>F1 Skoru</h6>
//                                 <input type="number" min="0" max="1" step="0.01" />
//                             </div>
//                         }
//                         {selectedAlarmTipi == "iskartaBilme" &&
//                             <div>
//                                 <h6>Iskarta Bilme Yüzdesi</h6>
//                                 <input type="number" min="0" max="100" step="1" />
//                             </div>
//                         }
//                     </div>
//                     {makineler.length > 0 && (
//                         <select
//                             defaultValue="placeholder"
//                             className="ai-select mb-4"
//                             value={selectedMakine}
//                             onChange={handleSelectedMakine}
//                         >
//                             <option value="placeholder" disabled>
//                                 Makine Seçiniz
//                             </option>
//                             {makineler.map((m, index) => (
//                                 <option key={index}>{m}</option>
//                             ))}
//                         </select>
//                     )}
//                     {kaliplar.length > 0 && (
//                         <select
//                             defaultValue="placeholder"
//                             className="ai-select mb-4"
//                             value={selectedKalip}
//                             onChange={handleSelectedKalip}
//                         >
//                             <option value="placeholder" disabled>
//                                 Kalıp Seçiniz
//                             </option>
//                             <option value="Hepsi">Hepsi</option>
//                             {kaliplar.map((kalip, index) => (
//                                 <option key={index} value={kalip}>
//                                     {kalip}
//                                 </option>
//                             ))}
//                         </select>
//                     )}

//                     {/* {modelTurleri.length > 0 && (
//                     <select
//                     defaultValue="placeholder"
//                     className="ai-select"
//                     value={selectedModel}
//                     onChange={handleSelectedModel}
//                     >
//                     <option value="placeholder" disabled>
//                     Model Seçiniz
//                     </option>
//                     <option value="Hepsi">Hepsi</option>
//                     {modelTurleri.map((model, index) => (
//                         <option key={index} value={model}>
//                         {model}
//                         </option>
//                         ))}
//                         </select>
//                         )} */}
//                     <div className='mb-4'>
//                         <h6>Email Adresi</h6>
//                         <input type="email" />
//                     </div>
//                     <button type='submit' className='btn btn-primary'>Alarm Ekle</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Alarm

import React, { useState } from "react";
import {
    Container,
    Button,
    Modal,
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Typography,
    Stack,
    Checkbox,
    OutlinedInput,
    ListItemText
} from "@mui/material";
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

const Alarm = () => {
    const mailler = ["semih@gmail.com", "rustemtekdemir@gmail.com", "muratyetkinaslan@gmail.com", "ekumru@apramuhendislik.com", "rahsan@apradanismanlik.com"];
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ alarmType: "", machine: "", mold: "", alarmDetay: "", emails: [] });
    const [data, setData] = useState([]);
    const [selectedMailler, setSelectedMailler] = useState([]);
    const makineler = ["Makine1", "Makine2", "Makine3"];
    const kaliplar = ["Kalıp1", "Kalıp2", "Kalıp3"];

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedMailler(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEmailChange = (e) => {
        setSelectedMailler(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, { ...formData, emails: selectedMailler }]);
        setFormData({ alarmType: "", machine: "", mold: "", alarmDetay: "", emails: [] });
        setSelectedMailler([]);
        handleClose();
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Alarm Yönetim Sistemi
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                startIcon={<AddIcon />}
                sx={{ mb: 2 }}
            >
                Yeni Alarm Ekle
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: 4,
                        m: "auto",
                        mt: 10,
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                        Yeni Alarm Ekle
                    </Typography>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Alarm Tipi</InputLabel>
                        <Select
                            name="alarmType"
                            value={formData.alarmType}
                            onChange={handleSelectChange}
                            label="Alarm Tipi"
                        >
                            <MenuItem value="iskartaBilememe">Üst Üste Iskarta Bilememe</MenuItem>
                            <MenuItem value="okNokDengesizligi">OK-NOK Dengesizliği Yüzdesi</MenuItem>
                            <MenuItem value="f1Skoru">F1 Skoru</MenuItem>
                            <MenuItem value="iskartaBilme">Iskarta Bilme Yüzdesi</MenuItem>
                        </Select>
                    </FormControl>
                    {formData.alarmType === 'iskartaBilememe' && (
                        <FormControl fullWidth margin="normal">
                            <TextField
                                name="alarmDetay"
                                label="Üst Üste Iskarta Bilememe"
                                type="number"
                                value={formData.alarmDetay}
                                onChange={handleSelectChange}
                                margin="normal"
                                fullWidth
                                inputProps={{ min: 0 }}
                            />
                        </FormControl>
                    )}
                    {formData.alarmType === 'okNokDengesizligi' && (
                        <FormControl fullWidth margin="normal">
                            <TextField
                                name="alarmDetay"
                                label="OK-NOK Dengesizliği Yüzdesi"
                                type="number"
                                value={formData.alarmDetay}
                                onChange={handleSelectChange}
                                margin="normal"
                                fullWidth
                                inputProps={{ min: 0, max: 100 }}
                            />
                        </FormControl>
                    )}
                    {formData.alarmType === 'f1Skoru' && (
                        <FormControl fullWidth margin="normal">
                            <TextField
                                name="alarmDetay"
                                label="F1 Skoru"
                                type="number"
                                value={formData.alarmDetay}
                                onChange={handleSelectChange}
                                margin="normal"
                                fullWidth
                                inputProps={{ min: 0, max: 1 }}
                            />
                        </FormControl>
                    )}
                    {formData.alarmType === 'iskartaBilme' && (
                        <FormControl fullWidth margin="normal">
                            <TextField
                                name="alarmDetay"
                                label="Iskarta Bilme Yüzdesi"
                                type="number"
                                value={formData.alarmDetay}
                                onChange={handleSelectChange}
                                margin="normal"
                                fullWidth
                                inputProps={{ min: 0, max: 100 }}
                            />
                        </FormControl>
                    )}
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Makine Seçiniz</InputLabel>
                        <Select
                            value={formData.machine}
                            onChange={handleSelectChange}
                            name="machine"
                            label="Makine Seçiniz"
                        >
                            <MenuItem value="" disabled>
                                Makine Seçiniz
                            </MenuItem>
                            {makineler.map((m, index) => (
                                <MenuItem key={index} value={m}>
                                    {m}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Kalıp Seçiniz</InputLabel>
                        <Select
                            value={formData.mold}
                            onChange={handleSelectChange}
                            name="mold"
                            label="Kalıp Seçiniz"
                        >
                            <MenuItem value="" disabled>
                                Kalıp Seçiniz
                            </MenuItem>
                            <MenuItem value="Hepsi">Hepsi</MenuItem>
                            {kaliplar.map((kalip, index) => (
                                <MenuItem key={index} value={kalip}>
                                    {kalip}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="demo-multiple-checkbox-label">Mailler</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedMailler}
                            onChange={handleEmailChange}
                            input={<OutlinedInput label="Mailler" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {mailler.map((mail) => (
                                <MenuItem key={mail} value={mail}>
                                    <Checkbox checked={selectedMailler.indexOf(mail) > -1} />
                                    <ListItemText primary={mail} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
                        <Button onClick={handleClose} color="secondary">
                            İptal
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Kaydet
                        </Button>
                    </Stack>
                </Box>
            </Modal>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="fw-bold" align="left">
                                Alarm Tipi
                            </TableCell>
                            <TableCell className="fw-bold" align="left">
                                Makine
                            </TableCell>
                            <TableCell className="fw-bold" align="left">
                                Kalıp
                            </TableCell>
                            <TableCell className="fw-bold" align="left">
                                Mail Adresleri
                            </TableCell>
                            <TableCell className="fw-bold" align="left" >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">{row.alarmType}</TableCell>
                                <TableCell align="left">{row.machine}</TableCell>
                                <TableCell align="left">{row.mold}</TableCell>
                                <TableCell align="left">{row.emails.join(', ')}</TableCell>
                                <TableCell align="left">
                                    <IconButton onClick={() => handleDelete(index)} color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Alarm;
