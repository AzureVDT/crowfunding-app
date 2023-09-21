import useOnchange from "hooks/useOnchange";
import ReactQuill, { Quill } from "react-quill";
import React, { useEffect, useMemo, useState } from "react";
import ImageUploader from "quill-image-uploader";
import ImageUpload from "components/image/ImageUpload";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import DatePicker from "react-datepicker";
import Button from "components/button/Button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { IconBudget } from "components/icons";
import { Dropdown } from "components/dropdown";
import { apiURL, imgbbAPI } from "config/config";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";
Quill.register("modules/imageUploader", ImageUploader);

const categories = ["Architecture", "Education", "Productivity"];

const CampaignAddNew = () => {
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { handleSubmit, control, setValue, reset, watch } = useForm();
    const getDropdownLabel = (name, defaultValue = "") => {
        const value = watch(name) || defaultValue;
        return value;
    };
    const resetValues = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setContent("");
        reset({
            title: "",
            category: "",
            short_description: "",
            goal: "",
            amount: "",
            prefilled: "",
            video: "",
            country: "",
        });
    };
    const handleAddNewCampaign = async (values) => {
        console.log(values);
        try {
            await axios.post(`${apiURL}/campaigns`, {
                ...values,
                content,
                startDate,
                endDate,
            });
            toast.success("Add new campaign successfully");
            resetValues();
        } catch (error) {
            toast.error("Can not add new campaign");
        }
    };
    const modules = useMemo(
        () => ({
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["link", "image"],
            ],
            imageUploader: {
                upload: async (file) => {
                    const bodyFormData = new FormData();
                    bodyFormData.append("image", file);
                    const response = await axios({
                        method: "post",
                        url: imgbbAPI,
                        data: bodyFormData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    return response.data.data.url;
                },
            },
        }),
        []
    );
    const handleSelectDropdownOption = (name, value) => {
        setValue(name, value);
    };
    const [countries, setCountries] = useState([]);
    const [filterCountry, setFilterCountry] = useOnchange(500);
    useEffect(() => {
        async function fetchCountries() {
            if (!filterCountry) return;
            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/name/${filterCountry}`
                );
                setCountries(response.data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        fetchCountries();
    }, [filterCountry]);
    return (
        <div className="bg-white rounded-xl py-10 px-[66px]">
            <div className="text-center">
                <h1 className="py-4 font-bold px-14 bg-text4 bg-opacity-5 rounded-xl text-text2 text-[25px] inline-block mb-10">
                    Start a Campaign 🚀
                </h1>
                <form onSubmit={handleSubmit(handleAddNewCampaign)}>
                    <FormRow>
                        <FormGroup>
                            <Label htmlFor="title">Campaign Title *</Label>
                            <Input
                                control={control}
                                name="title"
                                placeholder="Write a title"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Select a category *</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={getDropdownLabel(
                                        "category",
                                        "Select category"
                                    )}
                                ></Dropdown.Select>
                                <Dropdown.List>
                                    {categories.map((category) => (
                                        <Dropdown.Option
                                            key={category}
                                            onClick={() =>
                                                handleSelectDropdownOption(
                                                    "category",
                                                    category
                                                )
                                            }
                                        >
                                            {category}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                    </FormRow>
                    <FormGroup>
                        <Label>Short Description *</Label>
                        <Textarea
                            name="short_description"
                            control={control}
                            placeholder="Write a short description..."
                        ></Textarea>
                    </FormGroup>
                    <FormGroup>
                        <Label>Story *</Label>
                        <ReactQuill
                            placeholder="Write your story......"
                            modules={modules}
                            theme="snow"
                            value={content}
                            onChange={setContent}
                        />
                    </FormGroup>
                    <FormRow>
                        <FormGroup>
                            <Label>Featured Image</Label>
                            <ImageUpload
                                name="featured_image"
                                onChange={setValue}
                            ></ImageUpload>
                        </FormGroup>
                        <FormGroup></FormGroup>
                    </FormRow>
                    <FormGroup>
                        <div className="flex items-center bg-secondary gap-x-6 px-[45px] py-7 rounded-xl">
                            <IconBudget></IconBudget>
                            <span className="text-2xl font-bold text-white">
                                You will get 90% of total raised
                            </span>
                        </div>
                    </FormGroup>
                    <FormRow>
                        <FormGroup>
                            <Label htmlFor="goal">Goal *</Label>
                            <Input
                                control={control}
                                name="goal"
                                placeholder="$0.00 USD"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="amount">Raised Amount *</Label>
                            <Input
                                control={control}
                                name="amount"
                                placeholder="$0.00 USD"
                            ></Input>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <Label htmlFor="prefilled">Amount Prefilled</Label>
                            <Input
                                control={control}
                                name="prefilled"
                                placeholder="Amount Prefilled"
                            ></Input>
                            <p className="text-sm text-left text-text3">
                                It will help fill amount box by click, place
                                each amount by comma, ex: 10,20,30,40
                            </p>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="video">Video</Label>
                            <Input
                                control={control}
                                name="video"
                                placeholder="Video"
                            ></Input>
                            <p className="text-sm text-left text-text3">
                                Place Youtube or Vimeo Video URL
                            </p>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <Label htmlFor="title">Campaign End Method</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>
                                        Architecture
                                    </Dropdown.Option>
                                    <Dropdown.Option>Education</Dropdown.Option>
                                    <Dropdown.Option>
                                        Productivity
                                    </Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="title">Country</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={getDropdownLabel(
                                        "country",
                                        "Select country"
                                    )}
                                ></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Search
                                        placeholder="Search country ..."
                                        onChange={setFilterCountry}
                                    ></Dropdown.Search>
                                    {countries.length > 0 &&
                                        countries.map((country) => (
                                            <Dropdown.Option
                                                key={country?.name?.common}
                                                onClick={() =>
                                                    handleSelectDropdownOption(
                                                        "country",
                                                        country?.name?.common
                                                    )
                                                }
                                            >
                                                {country?.name?.common}
                                            </Dropdown.Option>
                                        ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <Label htmlFor="start_date">Start Date</Label>
                            <DatePicker
                                name="start_date"
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat={`dd-MM-yyyy`}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="end_date">End Date</Label>
                            <DatePicker
                                name="end_date"
                                showIcon
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat={`dd-MM-yyyy`}
                            />
                        </FormGroup>
                    </FormRow>
                    <Button
                        type="submit"
                        kind="primary"
                        className="px-10 mx-auto mt-10"
                    >
                        Submit new campaign
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CampaignAddNew;
