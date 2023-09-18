import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";

const CampaignAddNew = () => {
    const [content, setContent] = useState("");
    const { handleSubmit, control } = useForm();
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
                </form>
            </div>
        </div>
    );
};

export default CampaignAddNew;
