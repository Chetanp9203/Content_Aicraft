
import React, { useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '../../utils/Db';
import { AIOutput } from '../../utils/Schema';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
// import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCuContext } from '@/app/(context)/UpdateCuContext';
import { Button } from '@/components/ui/button';

const Usagetrack = () => {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    // const { usTotalUsage, setUSTotalUsage } = useContext(UserSubscriptionContext);
    const { updateCusage, setUpdateCsage } = useContext(UpdateCuContext);

    const [maxword, setmaxword] = useState(10000);

    const GetData = async () => {
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
        GetTotalUsage(result);
    };

    useEffect(() => {
        user && GetData();
    }, [user]);

    useEffect(() => {
        user && GetData();
    }, [updateCusage, user]);

    const GetTotalUsage = (result: any) => {
        let total = 0;
        result.forEach((element: { aiResponse: string | any[]; }) => {
            total += Number(element.aiResponse?.length);
        });
        setTotalUsage(total);
    };

    // const IsUserSubscribe = async () => {
    //     const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));
    //     if (result.length > 0) {
    //         setUSTotalUsage(true);
    //         setmaxword(100000);
    //     }
    // };

    return (
        <div className='m-5'>
            <div className='bg-cyan-950 text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-cyan-700 w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: `${(totalUsage / maxword) * 100}%` }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxword} Credit used</h2>
            </div>
            <Button variant={'outline'} className='w-full my-3 text-black'>Upgrade</Button>
        </div>
    );
};

export default Usagetrack;
