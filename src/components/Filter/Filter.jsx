import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constatns';
import { setStatusFilter } from '../../redux/filterSlice';
import { selectStatusFilter } from '../../redux/selectors';
import { FilterBtn, FilterContainer} from './Filter.styled';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilter);

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <FilterContainer>
            <FilterBtn
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}>
                All
            </FilterBtn>

            <FilterBtn

                selected={filter === statusFilters.follow}
                onClick={() => handleFilterChange(statusFilters.follow)}>
                Follow

            </FilterBtn>
            

            <FilterBtn
                selected={filter === statusFilters.following}
                onClick={() => handleFilterChange(statusFilters.following)}>
                Following
            </FilterBtn>
        </FilterContainer>
    )
};