function vmfunparser(
    json: {
        [key: string]: any;
    },
    depth?: number
): string {
    let vmf: string[] = [];
    let is_init: boolean = depth === undefined;

    depth = depth || 0;

    let depth_pad: string = "\t".repeat(depth);

    Object.keys(json).forEach(key => {
        switch (typeof json[key]) {
            case "string":
                vmf.push(`${depth_pad}"${key}" "${json[key]}"`);
                break;

            case "object":
                if (Array.isArray(json[key])) {
                    json[key].forEach((part: any) => {
                        vmf = vmf.concat(
                            vmfunparser(
                                {
                                    [key]: part
                                },
                                depth
                            )
                        );
                    });
                } else {
                    vmf.push(
                        `${depth_pad + key}`,
                        `${depth_pad}{`,
                        vmfunparser(json[key], (depth || 0) + 1),
                        `${depth_pad}}`
                    );
                }
                break;
        }
    });

    if (is_init) vmf.push("");

    return vmf.join("\r\n");
}

export = vmfunparser;
