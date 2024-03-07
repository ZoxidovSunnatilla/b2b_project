import React from 'react'
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CompanyData = () => {
    const { t } = useTranslation("common", "checkout", "account")
    
    return (
        <div className='w-full md:ml-5 ml-0'>
            <div className="md:w-2/5 w-full md:mb-0 mb-4">
              
                <div className="w-full bg-star md:p-6 px-2 py-4 rounded mb-4">
                    <div className="flex mb-8 justify-between w-full">
                        <p className="text-xl font-bold">{t("account:companyData")}</p>
                        <img src="/images/editCompanyData.svg" alt="" />
                    </div>
                    <div className="flex gap-2 mb-4 items-center">
                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextTwo")}</p>
                        <p className="text-base font-bold leading-4">JKT Company</p>
                    </div>
                    <div className="flex gap-2 mb-4 items-center">
                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextThree")}</p>
                        <p className="text-base font-bold leading-4">9932345431</p>
                    </div>
                    <div className="flex gap-2 mb-4 items-center">
                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextFour")}</p>
                        <p className="text-base font-bold leading-4 w-[153px]">177 Kent St Brooklyn, NY 11222 United States</p>
                    </div>
                    <div className="flex gap-2  items-center">
                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextFive")}</p>
                        <p className="text-base font-bold leading-4">+48 665 876 123</p>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default CompanyData
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "checkout" , "account"])),
        },
    }
}