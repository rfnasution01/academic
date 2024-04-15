import {
  BranchOrganization,
  CardOrganization,
} from '@/components/ui/card/organization'
import { DataStrukturOrganisasi } from '@/libs/consts/dummy/dataStaff'

export default function Staff() {
  const data = DataStrukturOrganisasi

  return (
    <div className="flex flex-col items-center justify-center text-[2rem]">
      {data?.map((item, idx) => (
        <div className="flex flex-col" key={idx}>
          <BranchOrganization
            isBefore
            lengthBefore={idx === 0 ? 0 : data?.[idx]?.length}
          />
          <div className="flex gap-64">
            {item?.map((list, id) => (
              <div className="flex" key={id}>
                <CardOrganization list={list} idx={idx} />
              </div>
            ))}
          </div>
          <BranchOrganization
            isAfter
            lengthAfter={idx === data.length - 1 ? 0 : data?.[idx]?.length}
          />
          <BranchOrganization isSeparator={data[idx].length > 2} />
        </div>
      ))}
      {/* Ring 1 
      <div className="flex flex-wrap items-center justify-center gap-x-64">
        {dataRing1.map((item, idx) => (
          <div key={idx} className="h-full">
            <CardStructurOrganization item={item} isRing1 />
          </div>
        ))}
      </div>
      <BorderStructureOrganization
        lengthBefore={ring1Length}
        lengthAfter={ring2Length}
      /> */}
      {/* Ring 2  */}
      {/* <div className="flex flex-wrap items-center justify-center gap-x-64">
        {dataRing2.map((item, idx) => (
          <div key={idx} className="h-full">
            <CardStructurOrganization item={item} isRing2 />
          </div>
        ))}
      </div> */}
      {/* <BorderStructureOrganization
        lengthBefore={ring2Length}
        lengthAfter={ring3Length}
      /> */}

      {/* Ring 3  */}
      {/* <div className="flex flex-wrap items-center justify-center gap-x-64">
        {dataRing3.map((item, idx) => (
          <div key={idx} className="h-full">
            <CardStructurOrganization item={item} isRing3 />
          </div>
        ))}
      </div>
      <BorderStructureOrganization
        lengthBefore={ring3Length}
        borderSeparation
        lengthAfter={ring4Length}
      /> */}

      {/* Ring 4  */}
      {/* <div className="flex flex-wrap items-center justify-center gap-x-64">
        {dataRing4.map((item, idx) => (
          <div key={idx} className="h-full">
            <CardStructurOrganization item={item} isRing4 />
          </div>
        ))}
      </div> */}
    </div>
  )
}
