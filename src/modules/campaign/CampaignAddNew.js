import axios from "axios";
import Button from "components/button/Button";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { IconBudget } from "components/icons";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import useOnchange from "hooks/useOnchange";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";

const CampaignAddNew = () => {
    const [content, setContent] = useState("");
    const { handleSubmit, control, setValue } = useForm();
    const handleAddNewCampaign = () => {};
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
        }),
        []
    );
    const handleSelectCategory = (value) => {
        setValue("category", value);
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
                console.log("fetchCountries ~ response:", response);
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
                                <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option
                                        onClick={() =>
                                            handleSelectCategory("Architecture")
                                        }
                                    >
                                        Architecture
                                    </Dropdown.Option>
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
                                <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Search
                                        placeholder="Search country"
                                        onChange={setFilterCountry}
                                    ></Dropdown.Search>
                                    {countries.length > 0 &&
                                        countries.map((country) => (
                                            <Dropdown.Option
                                                key={country?.name?.common}
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
                            <Input
                                control={control}
                                name="start_date"
                                placeholder="Start Date"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="end_date">End Date</Label>
                            <Input
                                control={control}
                                name="end_date"
                                placeholder="End Date"
                            ></Input>
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
