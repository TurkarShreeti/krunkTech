import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button, Input } from "../../components";

export default function Frame5596Page() {
  return (
    <>
      <Helmet>
        <title>Assignment </title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[110px] md:p-5">
        <div className="w-[20%] rounded-[20px] border-[7px] border-solid border-white-A700 bg-white-A700 md:w-full md:p-5">
          <div className="flex justify-between gap-5 rounded-tl-[20px] rounded-tr-[20px] bg-gray-100_02 p-2.5 shadow-xs">
            <div className="ml-2.5 flex w-[60%] items-center justify-center gap-2.5 md:ml-0">
              <div className="relative h-[50px] w-[50px] md:h-auto">
                <Img
                  src="images/img_simple_chatbots.png"
                  alt="simplechatbots"
                  className="h-[50px] w-[50px] rounded-[50%]"
                />
                <div className="absolute bottom-[2.00px] right-[3.50px] m-auto h-[8px] w-[8px] rounded bg-light_green-A700" />
              </div>
              <div className="flex flex-1 flex-col py-[5px]">
                <div className="flex items-start gap-2.5 self-start">
                  <div className="flex">
                    <Heading size="s" as="h1" className="!text-blue-A200">
                      Timpu{" "}
                    </Heading>
                  </div>
                  <Img src="images/img_checkmark.svg" alt="checkmark_one" className="mt-[5px] h-[15px] w-[14px]" />
                </div>
                <div className="relative mt-[-2px] flex self-start">
                  <Text size="lg" as="p" className="!text-blue-A200">
                    Chat assistant
                  </Text>
                </div>
              </div>
            </div>
            <div className="mr-2.5 flex w-[19%] items-end justify-center gap-[5px] py-[9px] md:mr-0">
              <div className="mb-[5px] h-[8px] w-[8px] rounded bg-light_green-A700" />
              <Text size="lg" as="p" className="mt-[18px] !text-blue-A200">
                Online
              </Text>
            </div>
          </div>
          <div className="bg-gradient1 px-[5px]">
            <div className="flex flex-col gap-5 p-2.5">
              <div className="mt-10 flex flex-col gap-5">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <div className="flex w-[76%] justify-center rounded-[15px] bg-gradient3 p-2.5 md:w-full">
                    <Text as="p" className="w-[96%]">
                      Hi Sam! I am your personal shopping assistant , how can i help you today ?
                    </Text>
                  </div>
                  <div className="flex px-2.5">
                    <Text size="xs" as="p">
                      4:45 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-end gap-1">
                  <div className="flex w-[65%] justify-center rounded-[15px] border border-solid border-white-A700 bg-light_green-100 p-2.5 md:w-full">
                    <Text as="p" className="w-[95%]">
                      I am looking for a hand bag, with long strap .
                    </Text>
                  </div>
                  <div className="flex px-2.5">
                    <Text size="xs" as="p" className="text-right">
                      4:46 PM
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Text as="p" className="!text-gray-500">
                  Popular tags for handbag
                </Text>
                <div className="flex items-center gap-[5px] self-stretch">
                  <div className="flex flex-1 gap-2.5">
                    <Button
                      color="gray_50_02"
                      size="sm"
                      shape="round"
                      className="w-full flex-1 border border-solid border-blue-A200 font-medium"
                    >
                      Clutch
                    </Button>
                    <Button
                      color="gray_50_02"
                      size="sm"
                      shape="round"
                      className="min-w-[100px] border border-solid border-blue-A200 font-medium"
                    >
                      Fabric
                    </Button>
                    <Button
                      color="gray_50_02"
                      size="sm"
                      shape="round"
                      className="w-full flex-1 border border-solid border-blue-A200 font-medium"
                    >
                      Baggit{" "}
                    </Button>
                    <div className="flex w-[15%] justify-end rounded-[5px] border border-solid border-blue-A200 bg-gray-50_02 py-[3px]">
                      <Text as="p" className="self-end !font-medium !text-blue-A200">
                        Mul
                      </Text>
                    </div>
                  </div>
                  <Img src="images/img_arrow_right_blue_a200.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="mb-[21px] flex flex-col gap-2.5">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex w-[76%] flex-col gap-2.5 rounded-[20px] bg-gradient4 p-2.5 md:w-full">
                    <div className="flex items-center justify-center gap-[11px] rounded-[10px] bg-white-A700 p-[7px]">
                      <Img
                        src="images/img_frame_5591.png"
                        alt="image"
                        className="h-[50px] w-[34%] rounded-[5px] object-cover"
                      />
                      <div className="my-0.5 flex flex-col items-center gap-[7px] px-1">
                        <div className="flex items-center gap-[5px] self-start">
                          <div className="flex">
                            <Text as="p" className="!font-medium">
                              <span className="text-blue_gray-900">Bags on&nbsp;</span>
                              <span className="font-semibold text-blue_gray-900">Timpu</span>
                            </Text>
                          </div>
                          <Img src="images/img_checkmark.svg" alt="checkmark_three" className="h-[15px] w-[14px]" />
                        </div>
                        <div className="flex items-center gap-5 self-start">
                          <Text size="s" as="p" className="self-end !text-gray-500">
                            1123 products{" "}
                          </Text>
                          <Img
                            src="images/img_arrow_right_gray_500.png"
                            alt="arrowright"
                            className="h-[24px] w-[24px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <Text as="p">Or set filter and help us choose the best bag for you.</Text>
                  </div>
                  <div className="flex px-2.5">
                    <Text size="xs" as="p">
                      4:48 PM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between gap-5">
                    <Text as="p" className="!text-gray-500">
                      Select filters
                    </Text>
                    <div className="flex w-[18%] justify-evenly">
                      <Img src="images/img_sliders_horizontal.svg" alt="sliders_one" className="h-[20px] w-[20px]" />
                      <Text as="p" className="!text-gray-700">
                        Filter
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <div className="flex w-[85%] gap-2.5 md:w-full">
                      <div className="flex flex-1 items-start justify-evenly rounded-[5px] border border-solid border-blue-A200 bg-gray-50_01">
                        <div className="flex flex-wrap items-center gap-[5px]">
                          <Text as="p" className="self-end !text-blue-A200">
                            Strap
                          </Text>
                          <Text as="p" className="self-start !text-blue-A200">
                            -
                          </Text>
                          <Text as="p" className="self-end !font-medium !text-blue-A200">
                            Long
                          </Text>
                        </div>
                        <Img
                          src="images/img_check_square_2.svg"
                          alt="checksquaretwo"
                          className="mt-1 h-[11px] w-[10px]"
                        />
                      </div>
                      <Button
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_checksquare2_gray_600.svg"
                            alt="check-square-2"
                            className="h-[11px] w-[10px]"
                          />
                        }
                        className="min-w-[79px] gap-[5px]"
                      >
                        Colour
                      </Button>
                      <Button
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_checksquare2_gray_600.svg"
                            alt="check-square-2"
                            className="h-[11px] w-[10px]"
                          />
                        }
                        className="min-w-[60px] gap-[5px]"
                      >
                        Size
                      </Button>
                    </div>
                    <div className="flex gap-2.5">
                      <Button
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_checksquare2_gray_600.svg"
                            alt="check-square-2"
                            className="h-[11px] w-[10px]"
                          />
                        }
                        className="min-w-[74px] gap-[5px]"
                      >
                        Brand
                      </Button>
                      <Button
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_checksquare2_gray_600.svg"
                            alt="check-square-2"
                            className="h-[11px] w-[10px]"
                          />
                        }
                        className="min-w-[88px] gap-[5px]"
                      >
                        Material
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[9px] border-2 border-solid border-white-A700 bg-gradient2">
            <div className="flex gap-[5px] self-stretch">
              <Input
                shape="round"
                name="message"
                placeholder={`Type your message`}
                suffix={<Img src="images/img_paperclip.svg" alt="paperclip" className="h-[20px] w-[20px]" />}
              />
              <Button color="blue_A200" size="md" className="rounded-[10px]">
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-[5px] px-[90px] md:px-5">
              <Text as="p" className="self-end !text-gray-400">
                Powered by{" "}
              </Text>
              <Heading as="h2" className="self-start">
                Krunk.ai
              </Heading>
              <Img src="images/img_logo.png" alt="logo_one" className="h-[18px] w-[18px] self-start object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
