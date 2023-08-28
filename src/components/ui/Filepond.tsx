'use client'
import React, { useEffect, useState } from 'react'
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop"
import FilePondPluginImageTransform from "filepond-plugin-image-transform"
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size"
import FilePondPluginImageEncode from "filepond-plugin-file-encode"
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

type User = {
    email: string
    pfp: string
    role: string
    username: string
    _id: string
}

registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageCrop,
    FilePondPluginImageTransform,
    FilePondPluginImageValidateSize,
    FilePondPluginImageEncode,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateType
);

type Files = {
    source: string,
    options: { type: "local" }
}

interface PageProps {
    setBase64: React.Dispatch<React.SetStateAction<string>>
    profile?: User | null
}

function Filepond({ setBase64, profile }: PageProps) {
    const [files, setFiles] = useState<Array<Files> | null | undefined>();

    useEffect(() => {
        setFiles([{
            source: profile?.pfp!,
            options: { type: "local" }
        }])
    }, [profile?.pfp])


    const setMetadata = (fileItems: any) => {
        fileItems.map((fileItem: any) => setBase64(fileItem.getFileEncodeBase64String()))
    }

    return (
        <div className="flex justify-center">
            {files && <FilePond
                // @ts-ignore
                files={files}
                onupdatefiles={(fileItems: any) => setMetadata(fileItems)}
                allowMultiple={false}
                server={{
                    load: (source, load, error, progress, abort, headers) => {
                        let myRequest = new Request(source);
                        fetch(myRequest).then(function (response) {
                            response.blob().then(function (myBlob) {
                                load(myBlob);
                            });
                        });
                    }
                }}
                imagePreviewHeight={170}
                imageCropAspectRatio="1:1"
                imageResizeTargetWidth={200}
                imageResizeTargetHeight={200}
                stylePanelLayout="compact circle"
                styleLoadIndicatorPosition="center bottom"
                styleButtonRemoveItemPosition="center bottom"
            />}
        </div>
    )
}

export default Filepond